import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams
    const listingId = searchParams.get('listingId')
    const userId = searchParams.get('userId')
    const authorId = searchParams.get('authorId')

    const query: {
      listingId?: string
      userId?: string
      listing?: {userId?: string }
    } = {}

     if(listingId) query.listingId = listingId
     if(userId) query.userId = userId
     if(authorId) query.listing = {userId: authorId}
    
  } catch (err) {
    return NextResponse.json(
      {message: 'Internal Server Error'},
      {status: 500}
    )
  }
}