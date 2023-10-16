"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div
      className=" h-screen w-screen overflow-auto pb-[50px] pt-[80px]"
      style={{ backgroundColor: "#ffebc8" }}
    >
      <AspectRatio ratio={9 / 16}>
        <img className="m-auto h-auto w-screen" src="/home-dummy.png" alt="" />
      </AspectRatio>
      <Card className="fixed bottom-4 right-10 border-0 bg-[#eca5b3] text-white drop-shadow-md">
        <CardHeader>
          <CardTitle>World Tour 2023</CardTitle>
          <CardDescription className="text-white">
            Only a few tickets left.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button variant="outline" className="font-bold text-black">
            Buy Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
