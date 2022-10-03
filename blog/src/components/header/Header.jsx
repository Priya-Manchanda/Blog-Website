import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Blog Website</span>
      </div>
      <img
        className="headerImg"
        src="https://img.freepik.com/free-photo/aerial-view-beautiful-colorful-landscape-background-amazing-mountains_181624-22209.jpg?w=2000"
        alt="Main Image"
      />
    </div>
  );
}
