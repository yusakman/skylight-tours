import { useRouter } from "next/router";
import { packages } from "@/const/packages";
import useIsMounted from "@/hooks";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Packages() {
  const router = useRouter();
  const mounted = useIsMounted();
  return (
    <>
      <Header setHeader={true} />
      {mounted && (
        <>
          {packages.map((item, idx) => {
            if (item.slug === router.query.slug) {
              return (
                <div className="tour-packages" key={idx}>
                  <h1>{item.name}</h1>
                  <p>Price: {item.price}</p>
                  <p>
                    Destination:{" "}
                    {item.destination.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </p>
                  <p>Include: {item.include}</p>
                  <p>{item.addition}</p>
                  <p>{item.titleDesc}</p>
                  <p>{item.desc}</p>
                  <p>{item.extra}</p>
                  <p>{item.note}</p>
                </div>
              );
            }
          })}
        </>
      )}
      <Footer />
    </>
  );
}
