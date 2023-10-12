"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
    return (
        <div className=" w-screen h-screen pt-[80px] pb-[50px] overflow-auto" style={{ backgroundColor: "#ffebc8" }}>
            <AspectRatio ratio={9 / 16}>
                <img className="w-screen m-auto h-auto" src="/home-dummy.png" alt="" />
            </AspectRatio>
            <Card className="fixed right-10 bottom-4 bg-[#eca5b3] text-white drop-shadow-md border-0">
                <CardHeader>
                    <CardTitle>World Tour 2023</CardTitle>
                    <CardDescription className="text-white">Only a few tickets left.</CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button variant="outline" className="text-black font-bold">
                        Buy Now
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
