import Find from "./Find";
import Rekomendasi from "./Rekomendasi";
import ByBrand from "./ByBrand";
import Pilih from "./Pilih";
import Guides from "./Guides";

type Props = {};

export default function BeliMobilContent({}: Props) {
  return (
    <>
      <Find />
      <Rekomendasi />
      <ByBrand />
      {/* <Pilih /> */}
      <Guides />
    </>
  );
}
