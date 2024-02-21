import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"></span>
        <span className="headerTitleLg">Cine Stack</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xhcHBlciUyMGJvYXJkfGVufDB8fDB8fHww"
        alt=""
      />
    </div>
  );
}