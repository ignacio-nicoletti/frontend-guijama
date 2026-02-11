"use client";
import { ArrowLeft } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { CustomButton } from "../form/button/custom-button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type CardProps = {
  title: string;
  content: React.ReactNode;
  showButton?: boolean;
  onButtonClick?: () => void;
  className?: string;
};

export const CustomCard = ({
  title,
  content,
  showButton = false,
  onButtonClick,
  className,
}: CardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      () => navigate(-1);
    }
  };
  return (
    <div className={className}>
      {showButton && (
        <div className="flex justify-start">
          <CustomButton className="mb-4" onClick={handleClick} variant="outline">
            <ArrowLeft />
            Volver
          </CustomButton>
        </div>
      )}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>{content}</CardContent>
      </Card>
    </div>
  );
};
