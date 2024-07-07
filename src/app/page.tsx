import { getServerSession } from "next-auth";
import styles from "./page.module.css";
import { ListingsParams } from "@/types/ListingParams";
import { EmptyState } from "@/components/EmptyState";

const Home = async ({ searchParams }: {searchParams: ListingsParams}) => {
  // const listings = await useFechListings(searchParams)

  // if (!listings.length)
     return <EmptyState showReset />;

  // return (
  //     <div>,
  //       {listings.map((listing) => {
  //         return (
  //           <ListingCard
  //             key={listing.id}
  //             data={listing}
  //             currentUser={currentUser}
  //           />
  //         );
  //       })}
  //     </div>
  // );
};

export default Home;