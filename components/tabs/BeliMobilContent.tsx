import * as React from 'react'
import Find from "./Find";
import Rekomendasi from "./Rekomendasi";
import ByBrand from "./ByBrand";
// import Pilih from "./Pilih";
import Guides from "./Guides";

type Props = {};

export default function BeliMobilContent({}: Props) {
  return (
    <>
      <Find />
      <Rekomendasi />
      {/* {loading && <p>Loading...</p>}
      {!loading && hasMore && <button onClick={loadMoreItems}>Load More</button>} */}
      <ByBrand />
      {/* <Pilih /> */}
      <Guides />
    </>
  );
}
