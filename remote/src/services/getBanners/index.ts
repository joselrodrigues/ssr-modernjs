const fakeApi = (): Promise<any> =>
  new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          banners: [
            "🚀 Module Federation Ready",
            "⚡ SSR Streaming Active",
            "🎯 Modern.js Framework",
            "🔥 Hot Module Reload",
            "💎 Production Ready",
            "🌟 Dynamic Imports",
          ],
        }),
      2000,
    );
  });

export const getBanners = (): Promise<{ banners: string[] }> => {
  return fakeApi();
};
