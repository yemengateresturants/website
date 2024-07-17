
const ReviewCard = ({ customerName, customerOrder, reviewText }: { customerName: string, customerOrder: string, reviewText: string }) => {

    return (
        <>
            <div className="review_card">
                <div className="review_card_text_wrapper">
                    <p className="secondary_text">{reviewText}</p>
                    <div className="features_text">
                        <h4 className="m-0">{customerName}</h4>
                        <div className="rating-wrapper">
                            <img src="/images/google.png" height="20" alt="Google reviews" />
                            <img className="rating-icons" src="/images/rating.png" alt="5 stars rating reviews" />
                        </div>
                        <span>{customerOrder}</span>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ReviewCard;
