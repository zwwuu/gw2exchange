export default function Ads() {
  return (
    <div className={"card card-compact h-full min-h-[300px] bg-gray-300 shadow"}>
      <div className={"card-body"}>
        <div id={`amzn-assoc-ad-${process.env.NEXT_PUBLIC_AMAZON_ADS_ID}`}></div>
      </div>
    </div>
  );
}
