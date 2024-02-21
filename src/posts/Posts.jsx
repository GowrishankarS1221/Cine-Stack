import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://m.media-amazon.com/images/M/MV5BMGIwMDIwMGYtMzg0MC00MjY2LThlNTktNTdiY2UyMjUxOTNjXkEyXkFqcGdeQXVyODkyNjc1MTE@._V1_.jpg"/>
      <Post img="https://live.staticflickr.com/65535/52667263530_99301cc0ac_h.jpg" />
      <Post img="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/pv-target-images/1b297d93d6ca58b4cff0cdcfc875d7071697ace2486bf85f904e6e0d7f596c27.jpg"/>
      <Post img="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4b014a41983645.57bc44e7ebb8e.jpg"/>
      <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFvMmtCDHres4R6dMlpwSGwFILNX4RONkGFg&usqp=CAU"/>
    </div>
  );
}