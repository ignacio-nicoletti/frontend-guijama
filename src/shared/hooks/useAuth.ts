import { useState } from 'react';

const useAuth = () => {
    const [user] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });
    const [loading] = useState(false);

    return { user, loading };
};

export default useAuth;