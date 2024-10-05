import React from "react";
import ReactCardFlip from "react-card-flip";

function FlashcardComponent({
  currentCardIndex,
  isFlipped,
  setIsFlipped,
  cards,
}) {
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          className="rounded-lg shadow-lg p-6 cursor-pointer flex flex-col items-center justify-center min-h-[50vh] bg-gray-100 mb-10"
          onClick={handleFlip}
        >
          <p className="text-lg text-center font-semibold">
            {cards[currentCardIndex].question}
          </p>
        </div>
        <div
          className="rounded-lg shadow-lg p-6 cursor-pointer flex flex-col items-center justify-center  min-h-[50vh] bg-gray-100  mb-10"
          onClick={handleFlip}
        >
          <p className="text-lg text-center font-bold text-green-600">
            {cards[currentCardIndex].answer}
          </p>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default FlashcardComponent;
