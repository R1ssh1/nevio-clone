$names = @(
    'seamless-welded-pipes-tubes-manufacturer-exporter',
    'sheets-plates-manufacturer-exporter',
    'round-bars-rods-manufacturer-exporter',
    'flanges-manufacturer-exporter',
    'forged-fittings-manufacturer-exporter',
    'buttweld-fittings-manufacturer-exporter',
    'fasteners-manufacturer-exporter',
    'reactangular-square-hollow-section-manufacturer-exporter'
)
foreach ($n in $names) {
    Invoke-WebRequest -Uri "https://www.champaksteel.com/$n.html" -OutFile "champak-$n.html"
    Write-Host "Downloaded $n"
}
