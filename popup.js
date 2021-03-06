let from_import = document.getElementById('import')
let import_output = document.getElementById('import_output')
from_import.addEventListener('change', event => {
    import_output.value = '//' + from_import.value.replace(/_/g, '/')
    navigator.clipboard.writeText(import_output.value).then(
        () => {},
        () => { console.err("failed to copy to clipboard") }
    )
})


let from_path = document.getElementById('path')
let path_output = document.getElementById('path_output')
from_path.addEventListener('change', event => {
    var target = from_path.value
    if (target.startsWith('//')) {
        target = target.substr(2)
    }
    path_output.value = target.replace(/\//g, '_')
    navigator.clipboard.writeText(path_output.value).then(
        () => {},
        () => { console.err("failed to copy to clipboard") }
    )
})
