"use client";
import { useParams } from "next/navigation";
import Horoscopedaily from "../../components/Horoscopedaily";
export default function ZodiacSignPage() {
  const { sign } = useParams();

  return (
    <>
      <Horoscopedaily activeSign={sign} />
    </>
  );
}
