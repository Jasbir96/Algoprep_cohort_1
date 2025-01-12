import BannerSection from "@/components/section/BannerSection";
import CategoriesSection from "@/components/section/CategoriesSection";
import JumperSection from "@/components/section/jumper";


export default function Home() {
  const list = [
    {
      label: "Top Rated",
      href: "top-rated",
    },
    {
      label: "Popular",
      href: "popular",

    },
    {
      label: "Upcoming",
      href: "upcoming",
    },
  ];
  return (
    <>
    <JumperSection list={list}/>
    <BannerSection/>
    {/* // list of categories  */}
      {list.map((item) => {
        return <CategoriesSection key={item.label} title={item.label} id={item.href} />
      })}
    </>
  );
}
