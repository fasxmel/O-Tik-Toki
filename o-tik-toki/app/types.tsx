export interface RandomUser {
    id: string,
    name: string,
    avatar: string,
}

export interface PostMainProfile {
    id: string,
    user_id: string,
    video_url: string,
    text: string,
    video: string,
    created_at: string,
    profile: {
        user_id: string,
        name: string,
        avatar: string,
    }
}

export interface Like {
    id: string,
    post_id: string,
    user_id: string,
}

export interface Comment{
    id: string,
    post_id: string,
    user_id: string,
    text: string,
    created_at: string,
}

export interface UploadError {
    type: string,
    message: string
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



// LAYOTS INCLUDES TAYPES

export interface MenuItemsTypes {
    iconString: string,
    colorString: string,
    sizeString: string,
}

export interface MenuItemsCompTypes {
    user: RandomUser      
}

