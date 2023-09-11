import { render } from "preact-render-to-string";
export const Page = ({ host, headers }: { host: string, headers: Record<string, any> }) => (
	<div className="container">
		<h1 class="h1">Hello from {host}</h1>
		<ul>
			{Object.entries(headers).map(([key, val]) => <li><pre><b>{key}</b> = {val}</pre></li>)}
		</ul>
	</div>
);

export default function (data: { host: string, headers: Record<string, any> }): string {
	return render(<Page host={data.host} headers={data.headers} />)
}
