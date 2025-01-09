import { useState } from "react";
import { formatDate } from "../../utils/formatDate";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";

const Feedback = ({ reviews, totalRating }) => {
    const [showFeedbackForm, setShowFeedbackForm] = useState(false);

    return (
        <div className="mt-10">
            <div className="mb-12">
                <h4 className="text-2xl font-bold text-headingColor mb-6">
                    All reviews ({reviews.length})
                </h4>

                {/* Display reviews in a column with each review one after another */}
                <div className="space-y-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="flex gap-4 border-b border-gray-300 pb-6"
                        >
                            {/* Reviewer's Avatar */}
                            <figure className="w-12 h-12 rounded-full overflow-hidden">
                                <img
                                    src={review.user?.photo || "/path/to/default-avatar.png"}
                                    alt="Reviewer Avatar"
                                    className="w-full h-full object-cover"
                                />
                            </figure>

                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-2">
                                    <h5 className="text-lg font-semibold text-primaryColor">
                                        {review.user?.name} <span className="text-sm font-normal text-textColor">
                                            <p className="text-sm text-textColor">
                                                {formatDate(review.createdAt)}
                                            </p>
                                        </span>
                                    </h5>
                                    <div className="flex gap-1 mt-2">
                                        {[...Array(review.rating || 0).keys()].map((_, index) => (
                                            <AiFillStar key={index} color="yellow" />
                                        ))}
                                    </div>
                                </div>

                                <p className="text-md text-textColor mt-1">{review.reviewText}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {showFeedbackForm ? (
                <FeedbackForm />
            ) : (
                <div className="text-center mt-8">
                    <button
                        className="btn bg-primaryColor text-white px-6 py-2 rounded-lg shadow-md hover:bg-primaryColorDark transition duration-300"
                        onClick={() => setShowFeedbackForm(true)}
                    >
                        Give Feedback
                    </button>
                </div>
            )}
        </div>
    );
};

export default Feedback;
