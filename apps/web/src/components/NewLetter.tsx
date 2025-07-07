import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

function NewsLetter() {
  return (
    <div className="pb-24 px-4 lg:px-0 relative">
      <div className="max-w-5xl mx-auto relative">
        <div
          className="bg-white border-4 border-black p-8 md:p-12 
        shadow-xl grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="mb-8">
              <span className="font-semibold outline-2 bg-primary text-black px-2.5 py-1.5 text-sm transform -rotate-2 mb-10 inline-block">
                NEWSLETTER
              </span>
              <h2 className="font-head text-3xl lg:text-4xl font-semibold mb-4">
                Get Our
                <span className="inline-block bg-black text-white px-4 py-2 mt-2">
                  Weekly Updates
                </span>
              </h2>
              <p className="font-sans text-base text-muted-foreground font-medium">
                Join us getting notify on new movies!
              </p>
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute inset-0 bg-accent border-4 
              border-black transform translate-x-3 translate-y-3"
            ></div>
            <div
              className="relative bg-white border-4 border-black 
               p-6"
            >
              <form className="space-y-6">
                <div className="">
                  <label htmlFor="">Email Address</label>
                  <Input id="email" placeholder="example@example.com" />
                </div>

                <Button onClick={() => {}} type="submit" className="w-full">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
