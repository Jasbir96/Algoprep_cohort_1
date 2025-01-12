import BannerSection from "@/components/section/BannerSection";
import CategoriesSection from "@/components/section/CategoriesSection";
import JumperSection from "@/components/section/jumper";
import { api, ENDPOINT } from "@/lib/api";


export default function Home() {
    const list = [
        {
            label: "Comedy",
            href: "comedy",
            fetcher: async () => {
                return (await api.get(ENDPOINT.fetchComedyTvShows))?.data?.response?.results;
            },
        },
        {
            label: "Crime",
            href: "crime",
            fetcher: async () => {
                return (await api.get(ENDPOINT.fetchCrimeTvShows))?.data?.response?.results;
            },
        },
        {
            label: "Drama",
            href: "drama",
            fetcher: async () => {
                return (await api.get(ENDPOINT.fetchDramaTvShows))?.data?.response?.results;
            },
        },
        {
            label: "Action",
            href: "action",
            fetcher: async () => {
                return (await api.get(ENDPOINT.fetchActionTvShows))?.data?.response?.results;
            },
        },
    ];
    const getTVBannerData = async () => {
        return (await api.get(ENDPOINT.fetchMysteryTvShows)).data?.response?.results;
    };

  return (
    <>
    <JumperSection list={list}/>
          <BannerSection fetcher={getTVBannerData}/>
    {/* // list of categories  */}
      {list.map((item) => {
        return <CategoriesSection key={item.label} title={item.label} id={item.href} fetcher={item.fetcher} />
      })}
    </>
  );
}
