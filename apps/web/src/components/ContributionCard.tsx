import { Github } from "lucide-react";
import { Button } from "./ui/Button";
import {} from "react-router-dom";

function ContributionCard() {
  return (
    <div className="pb-24 px-4 lg:px-0 relative">
      <div className="bg-white border-4 shadow-lg p-8 md:p-12 max-w-3xl mx-auto text-center">
        <h3 className="font-head text-3xl lg:text-4xl font-bold">
          Wanna Contribute to the Project?
        </h3>
        <p className="font-sans text-base text-muted-foreground mt-2 max-w-xl mx-auto">
          Experience the magic of reservation system work flow here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button className="flex items-center gap-2" onClick={() => {}}>
            Github <Github size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ContributionCard;
