'use client';
import ClientOnly from "./components/ClientOnly";
import PostMain from "./components/PostMain";
import MainLayout from "./layouts/MainLayout";

const Home = ()=> {
  return (
    <>
    
    <MainLayout>
     <div className="mt-[80px]  w-[calc(100%-90px)] max-w-[690px] ml-auto">
      <ClientOnly>
        <PostMain post={
          {
            id: "1",
            user_id: '456',
            video_url: 'video/beach.mp4',
            text: 'some text',
            video: 'https://cdn.dribbble.com/users/3285263/screenshots/16583383/media/0c0f2b9b9c4b9e0e2b5c0c4efb01b706.gif?compress=1&resize=1200x900&vertical=top',
            created_at: 'date here',
            profile:{
              user_id: '456',
              name: 'user 1',
              avatar: 'https://placehold.co/100'
            }
          }
        } />
      </ClientOnly>
     </div>
    </MainLayout>
   
    </>
  );
}

export default Home
