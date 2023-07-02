export default function Ads() {
  return (
    <div className={"flex h-full items-center justify-center"}>
      <iframe
        frameBorder={"0"}
        height={"250"}
        marginWidth={0}
        sandbox={"allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"}
        scrolling={"no"}
        src={
          "//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=audibleplus&banner=0MG2XKQ7PYPP84NBNFR2&f=ifr&lc=pf4&linkID=f4b9b216e4d41a745a4b404d62a37707&t=gw2exchange-20&tracking_id=gw2exchange-20"
        }
        style={{ border: "none" }}
        width={"300"}
      />
    </div>
  );
}
