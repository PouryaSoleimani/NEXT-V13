import { ShoppingBasket, Truck } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import { HiCash } from "react-icons/hi";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";

export default function CardComponent() {
  function buyHandler() {
    toast.success("Item Added To Cart 🛒", {
      style: {
        backgroundColor: "black",
        color: "white",
        border: "2px solid #505050",
        fontWeight: "bold",
      },
    });
  }
  return (
    <Card className="w-full max-w-sm mx-1">
      <CardHeader>
        <CardTitle>Iphone 15 Promax</CardTitle>
        <CardDescription> 512GB | Natural Titanium </CardDescription>
        <CardAction>
          <Button variant="black" onClick={() => buyHandler()}>
            <ShoppingBasket className="!size-6" />
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent>
        <Image
          src="/images/iphone_15_promax.jpg"
          alt="iphone15promax"
          width={350}
          height={300}
          className="rounded-lg mx-auto  shadow-xl shadow-black aspect-3/2 hover:scale-105 duration-300"
        />
      </CardContent>

      <CardFooter className="flex-col gap-2">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant={"lime"} className="w-full">
              {" "}
              More Info{" "}
            </Button>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-center text-xl font-bold mb-1 bg-zinc-900 py-2 rounded-md w-[95%] mx-auto">
                Iphone 15 Promax
              </AlertDialogTitle>
              <AlertDialogDescription>
                <Image
                  src="/images/iphone_15_promax.jpg"
                  alt="iphone15promax"
                  width={435}
                  height={300}
                  className="rounded-lg border mx-auto  shadow-xl shadow-black aspect-3/2 hover:scale-105 duration-300"
                />
                <span className="bg-black flex items-center-safe justify-around gap-1 w-[95%] mx-auto my-4 p-4 rounded-md *:font-bold *:p-2">
                  <Badge>512 Gb</Badge>
                  <Badge variant="secondary">Natural Titanium</Badge>
                  <Badge>$ 999</Badge>
                  <Badge>
                    <HiCash className="!size-4" />
                    Warranty
                  </Badge>
                  <Badge>
                    <Truck className="!size-4" />
                    Delivery
                  </Badge>
                </span>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Close</AlertDialogCancel>
              <AlertDialogAction onClick={() => buyHandler()}>Add to Cart</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Button variant="black" className="w-full">
          {" "}
          Compare{" "}
        </Button>
      </CardFooter>
    </Card>
  );
}
