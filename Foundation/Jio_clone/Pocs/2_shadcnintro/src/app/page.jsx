// import in the file you want to use 
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
export default function Home() {
  return (
    <div className="flex flex-col gap-3 items-center border-[1px]">
      <h1>Hello Next</h1>
      <Button
        className="text-bold text-gray-600 bg-white hover:bg-red-400"
        variant="outline"
        size="icon"
      >Hello</Button>
      <div className="w-full h-10 bg-gray-400 flex gap-2 items-center ">
        <Badge className="bg-gray-600" variant={"secondary"}>Top Rated</Badge>
        <Badge className="bg-gray-600 hover:bg-blue-500" variant={"destructive"}> Popular</Badge>
        <Badge className="bg-gray-600" variant={"outline"}>Upcoming</Badge>
      </div>
    </div>
  );
}
