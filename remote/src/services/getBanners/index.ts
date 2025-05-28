const fakeApi = (): Promise<any> =>
  new Promise((resolve) => {
    setTimeout(
      () => resolve({ banners: ["banner1", "banner2", "banner3"] }),
      3000
    );
  });

export const getBanners = (): Promise<{ banners: string[] }> => {
  return fakeApi();
};
