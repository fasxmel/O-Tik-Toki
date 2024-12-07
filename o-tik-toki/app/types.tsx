export interface RandomUser {
    id: string;
    name: string;
    avatar: string;
}

export interface CropperDimensions {
    width?: number | null;
    height?: number | null;
    left?: number | null;
    top?: number | null;
}

export interface ShowErrorObject {
    message: string;
    type: string;
}

export interface PostMainProfile {
    id: string;
    user_id: string;
    video_url: string;
    text: string;
    video: string;
    created_at: string;
    profile: {
        user_id: string;
        name: string;
        avatar: string;
    }
}

export interface Like {
    id: string;
    post_id: string;
    user_id: string;
}

export interface Post {
    id: string;
    user_id: string;
    video_url: string;
    text: string;
    created_at: string;
}

export interface CommentWhitProfile {
    id: string;
    post_id: string;
    user_id: string;
    text: string;
    created_at: string;
    profile: {
        user_id: string;
        name: string;
        avatar: string;
    }
}


export interface Comment{
    id: string;
    post_id: string;
    user_id: string;
    text: string;
    created_at: string;
}

export interface UploadError {
    type: string;
    message: string;
}

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

//COMPONENTS TAYPES

export interface PostMainCompTypes {
    post: PostMainProfile

}

export interface PostMainLikesCompTypes {
    post: PostMainProfile
}

export interface ProfilePageTypes {
    params: { id: string; };
}

export interface PostUserCompTypes {
    post: Post
}


export interface UploadLayoutCompTypes {
    error?: UploadError
}

export interface PostPageTypes {
    params: { postId: string; userId: string; };
}

export interface CommentsHeaderCompTypes {
    params: { postId: string; userId: string; };
    post: PostMainProfile
}

export interface CommentsCompTypes {
    params: { userId: string; postId: string; };
}

export interface SingleCommentCompTypes {
    comment: CommentWhitProfile
    params: { userId: string; postId: string; };
}



// LAYOTS INCLUDES TAYPES

export interface MenuItemsTypes {
    iconString: string;
    colorString: string;
    sizeString: string;
}

export interface MenuItemsCompTypes {
    user: RandomUser      
}

export interface TextInputCompTypes {
    string: string;
    inputType: string;
    placeholder: string;
    error: string;
    onUpdate: (newValue: string) => void;
   
}

