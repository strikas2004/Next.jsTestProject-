import { Index } from "@/components/component";
import Image from "next/image";
import { MantineProvider } from '@mantine/core';


export default function Home() {
  return (
    <>
      <div >
        <MantineProvider>
          <Index />
        </MantineProvider>
      </div>
    </>
  );
}
