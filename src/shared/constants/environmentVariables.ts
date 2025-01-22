export const getAuthToken = () => {
  return String(process.env.NEXT_PUBLIC_PPA_AUTH_TOKEN_KEY);
};

export const getApiUrl = () => {
  return String(process.env.NEXT_PUBLIC_PPA_API_URL);
};

export const getCryptoKey = () => {
  return String(process.env.NEXT_PUBLIC_PPA_CRYPTO_SECRET_KEY);
};
