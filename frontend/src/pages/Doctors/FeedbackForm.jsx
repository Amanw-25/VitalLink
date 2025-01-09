import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!rating || !reviewText) {
        setLoading(false);
        return toast.error("Please provide rating and review text");
      }

      const response = await fetch(`${BASE_URL}/doctors/${id}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          rating,
          reviewText,
        }),
      });
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message);
      }

      // Reset states after successful submission
      setRating(0);
      setReviewText("");
      setHover(0);  // Reset hover as well
      setLoading(false);

      toast.success("Review submitted successfully");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error.message); // Use error.message here
    }
  };

  return (
    <form onSubmit={handleSubmitReview}>
      <div>
        <h3 className="text-headingColor text-[15px] leading-6 font-semibold mb-4 mt-0">
          How would you rate the overall experience?
        </h3>

        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;

            return (
              <button
                key={index}
                type="button"
                className={`${
                  index <= ((rating && hover) || hover)
                    ? "text-yellowColor"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer `}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);  // Reset hover on double click
                  setRating(0); // Reset rating on double click
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[15px] leading-6 font-semibold mb-4 mt-0">
          Share your feedback or suggestions
        </h3>
        <textarea
          className="border border-solid border-[#4f6e9c34] focus:outline outline-primaryColor w-full px-2 py-3 rounded-md"
          rows={5}
          placeholder="Your Review"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn">
        {loading ? (
          <div className="flex items-center justify-center gap-2">
            <HashLoader color={"black"} size={25} />
            <span>Submitting...</span>
          </div>
        ) : (
          "Submit Feedback"
        )}
      </button>
    </form>
  );
};

export default FeedbackForm;
