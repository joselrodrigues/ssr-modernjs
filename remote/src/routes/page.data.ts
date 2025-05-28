import { defer } from "@modern-js/runtime/router";
import { getBanners } from "@/services/getBanners";

export const loader = async () => {
  return defer({
    banners: getBanners?.(),
  });
};
