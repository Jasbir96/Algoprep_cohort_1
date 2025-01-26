import BannerSection from "@/components/section/BannerSection";
import CategoriesSection from "@/components/section/CategoriesSection";
import JumperSection from "@/components/section/jumper";
import { api, ENDPOINT } from "@/lib/api";


export default function Home() {
  const list = [
    {
      label: "Top Rated",
      href: "top-rated",
      fetcher:async function getTopRatedData() {
      const resp = await api.get(ENDPOINT.discoverTopRated);
      const data = resp?.data?.response?.results;
      return data;
    }
    },
    {
      label: "Popular",
      href: "popular",
      fetcher:async function getPopular(){
        const resp = await api.get(ENDPOINT.discoverTrending);
        const data = resp?.data?.response?.results;
        return data;
      }
    },
    {
      label: "Upcoming",
      href: "upcoming",
      fetcher: async function getUpcoming() {
        const resp = await api.get(ENDPOINT.discoverUpcoming);
        const data = resp?.data?.response?.results;
        return data;
      }
    },
  ];
   async function getHomeBannerData() {
    const resp = await api.get(ENDPOINT.discoverNowPlaying);
    const data = resp?.data?.response?.results;
    return data;
  }

  return (
    <>
    <JumperSection list={list}/>
      <BannerSection fetcher={getHomeBannerData}/>
    {/* // list of categories  */}
      {list.map((item) => {
        return <CategoriesSection key={item.label} title={item.label} id={item.href} fetcher={item.fetcher} />
      })}
    </>
  );
}
