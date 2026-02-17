import type { ErrorInfo, ReactNode } from "react";
import { Component } from "react";
import { toast } from "sonner";

type ErrorBoundaryProps = {
  children: ReactNode;
  fallback?: ReactNode | ((error: Error, resetError: () => void) => ReactNode);
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showToast?: boolean;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

class ErrorBoundaryComponent extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  resetError = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render() {
    const { hasError, error } = this.state;
    const { children, fallback } = this.props;

    if (hasError && error) {
      if (typeof fallback === "function") {
        return fallback(error, this.resetError);
      }

      return (
        fallback || (
          <div className="p-4 rounded-md bg-destructive/10 text-destructive">
            <h3 className="font-medium">Algo salió mal</h3>
            <p className="text-sm mt-1">{error.message || "Ocurrió un error inesperado"}</p>
            <button
              type="button"
              onClick={this.resetError}
              className="mt-2 px-3 py-1 text-xs bg-muted rounded-md hover:bg-muted/80"
            >
              Volver a Intentar
            </button>
          </div>
        )
      );
    }

    return children;
  }
}

export function ErrorBoundary({
  children,
  fallback,
  onError,
  showToast = true,
}: ErrorBoundaryProps) {
  const handleError = (error: Error, errorInfo: ErrorInfo) => {
    if (showToast) {
      toast.error("Ocurrió un error", {
        description: error.message || "Something went wrong",
      });
    }

    if (onError) {
      onError(error, errorInfo);
    }
  };

  return (
    <ErrorBoundaryComponent fallback={fallback} onError={handleError}>
      {children}
    </ErrorBoundaryComponent>
  );
}
