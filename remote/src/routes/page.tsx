import { Suspense } from "react";
import Button from "../components/Button";
import { getBanners } from "@/services/getBanners";
import { Await } from "@modern-js/runtime/router";

const Index = () => (
  <div>
    <Suspense fallback={null}>
      <Await resolve={getBanners()} errorElement={<div>error</div>}>
        <Button />
      </Await>
    </Suspense>
  </div>
);

export default Index;
