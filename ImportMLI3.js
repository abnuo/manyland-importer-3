if (typeof(pixelCopyImage) === 'undefined') {
	fetch('https://raw.githubusercontent.com/abnuo/manyland-importer-3/main/PixelCopyImage.js').then(
		response => response.text()
	).then(
		script => {
			pci = document.createElement('script');
			pci.innerHTML = 'Promise.resolve((async () => {\n'+script+'\n})());';
			$('body')[0].appendChild(pci);
		}
	);
}
