
//^ WRAP WITH TRY CATCH UTIL

export async function WrapWithTryCatch(fallback: any) {
  try {
    await fallback()
  } catch (error) {
    if(error instanceof Error){
      return { message : `ERRROR => ${error.name} : ${error.message}`}
    }
  }
} 