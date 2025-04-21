
import img from "../assets/cmng soon 1.png";
export const GetStarted = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white text-center px-4">
    <img
      src={img}
      alt="We are sorry"
      className="w-[80%] h-[70%] sm:w-[30%] sm:h-[50%] mb-6"
    />
    <div className="text-lg sm:text-xl space-y-2">
      <p>We sincerely regret that this feature isn’t available at the moment. </p>
      <p> However, we’re thrilled to announce that our product is on the verge of launching.</p>
      <p>Stay tuned for exciting updates!</p>
    </div>
  </div>
        
  )
}
