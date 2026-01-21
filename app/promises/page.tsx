
async function Page(props: PageProps<'/promises'>) {
  console.info('PROPS => ', props)
  const _result = await promiseHandler(2)

  if (!_result) {
    return <div className="section bg-rose-800/30 p-3 center">NOT CORRECT</div>
  }
  return (
    <div className="section center bg-emerald-900/30">CORRECT</div>
  )
}
export default Page

async function promiseHandler(num: number) {
  return new Promise((resolve, reject) => {
    if (num == 2) {
      setTimeout(() => {
        resolve(num)
      }, 2000);
    } else {
      reject('NUM IS NOT CORRECT')
    }
  })
}