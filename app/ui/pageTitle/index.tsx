import { usePathname } from "next/navigation";

import { getPage } from "@/app/utils/getPage";

const PageTitle = () => {
  const fullPath = usePathname()
    .split("/")
    .filter((item) => !!item);

  const title = getPage(fullPath.slice(-1).toString())?.name;

  return <h1>{title}</h1>;
};

export default PageTitle;
