import Image from "next/image";

export default function ShuffleArray({
    queryArray
}) {
    for (let i = queryArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [queryArray[i], queryArray[j]] = [queryArray[j], queryArray[i]];
    }
    return queryArray;
}

function motion({
	images
}) {
	return (
		<div className="container w-1/3 flex flex-row overflow-hidden">
			{images.map(image => (
			<Image
			src={image}
			alt={image}
			width={400}
			height={400}
			className=""
			/>
			))}
		</div>
	)
}