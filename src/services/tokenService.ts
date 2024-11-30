export const setTokens = (accessToken: string, refreshToken: string): void => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
    }
};

export const getAccessToken = (): string | null => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('accessToken');
    }
    return null;
};

export const getRefreshToken = (): string | null => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('refreshToken');
    }
    return null;
};

export const clearTokens = (): void => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    }
};
