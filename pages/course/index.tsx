import {
  HomeSidebar,
  CategoryCard,
  CourseListSidebar,
  CourseDetails,
} from "../../Components/components";
import CoursesData from "../../data/course_categories.json";
import CourseListData from "../../data/course_list.json";

const Courses = () => {
  return (
    <div className="grid grid-cols-12 w-full h-screen ">
      <div className="col-span-1 ">
        <HomeSidebar pageNumber={2} />
      </div>
      <div className="col-span-11 ">
        <CourseListSidebar />
      </div>
      {/* <div className="col-span-7 ">
        <CourseDetails courseDetail={CourseListData.courseList[0]} /> */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 m-8">
          {CoursesData.map((category, index: any) => {
            return (
              <CategoryCard
                key={index}
                imageUrl={category.imageUrl}
                categoryName={category.categoryName}
                onClick={() => {
                  console.log("clicked");
                }}
              />
            );
          })}
        </div> */}
      {/* </div> */}
    </div>
  );
};



export default Courses;
