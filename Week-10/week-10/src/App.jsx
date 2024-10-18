import{QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'

const queryClient = new QueryClient()
async function getter() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const response = await data.json();
  return response;
}

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Posts />
    </QueryClientProvider>
  )
}


function Posts() {
  // const queryClient = useQueryCleint()
  const {data, isLoading, error} = useQuery({queryKey: ['posts'], queryFn: getter})

  if (error) {
    return <div>
      Error while fetching
    </div>
  }

  if (isLoading) {
    return "Loading...."
  }

  return <div>
    {JSON.stringify(data)}
  </div>
}

export default App
