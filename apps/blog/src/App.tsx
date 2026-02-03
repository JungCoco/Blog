import { Button } from "@/components/ui/button"

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  
  // const handleLogin = () => {
  //   setIsLoading(true);
  //   setTimeout(() => setIsLoading(false), 2000);
  // };
  
  return (
    <main className="min-h-screen p-6 flex flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-semibold">Test UI</h1>
      
      {/* 기존 Button */}
      <Button className="rounded-lg bg-red-0">Click me</Button>
      
      {/* AuthButton 테스트 */}
      <div className="flex flex-col gap-4 w-full max-w-md">
        <h2 className="text-lg font-semibold">AuthButton 테스트</h2>
        
        {/* 기본 버튼들 */}
        {/* <div className="flex gap-2">
          <AuthButton intent="login" size="sm">
            Small Login
          </AuthButton>
          <AuthButton intent="login" size="md">
            Medium Login
          </AuthButton>
          <AuthButton intent="login" size="lg">
            Large Login
          </AuthButton>
        </div> */}
        
        {/* Intent 변형 */}
        <div className="flex flex-col gap-2">
          {/* <AuthButton intent="login">
            로그인
          </AuthButton>
          <AuthButton intent="sub_login">
            구글로 로그인
          </AuthButton>
          <AuthButton intent="logout">
            로그아웃
          </AuthButton> */}
        </div>
        
        {/* 상태 테스트 */}
        <div className="flex flex-col gap-2">
          {/* <AuthButton
            intent="login"
            loading={isLoading}
            onClick={handleLogin}
          >
            {isLoading ? '로그인 중...' : '로그인 테스트'}
          </AuthButton>
          
          <AuthButton intent="login" disabled>
            비활성화 버튼
          </AuthButton> */}
        </div>
      </div>
      
      {/* 기존 테스트 버튼들 */}
      <Button className="p-lg">Click me</Button>
      <Button className="p-0 p-sm">Click me</Button>
      <div className="flex flex-col gap-sm">
        <Button className="pl-sm font-bold text-md">Click me</Button>
        <Button className="text-xl">Click me</Button>
      </div>
      <Button className="rounded-md font-bold">Click me</Button>
      <Button className="text-blue-1 bg-blue-0">Click me</Button>
      <Button>Click me</Button>
    </main>
  )
}

export default App