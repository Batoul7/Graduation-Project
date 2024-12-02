import BookSection1 from "../BookSection1/BookSection1"
import BookSection2 from "../BookSection2/BookSection2"
function BookSections() {
    return (
        <div className="bg-myprimary-dark-08 px-4 xl:px-20 2xl:px-mainpaddinglarge  lg:py-0 ">
            <BookSection1 />
            <BookSection2 />
        </div>
    )
}

export default BookSections