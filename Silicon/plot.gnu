#!gnuplot
set terminal postscript portrait  enhanced color dashed lw 1 ",12"
set output "plot.gnu_projected.ps"
set xrange [0.0:    3.0266]
unset xtics
#set yrange [    1.000000:  100.000000]
set ytics     1.000000,    0.010000,  100.000000 
set ylabel "E - E_{ref} (eV)"
set border lw 0.5
set style arrow 1 nohead front lw 0.5 lc rgb 'black'
set arrow from     0.0000,graph 0 to     0.0000,graph 1 as 1
set arrow from     1.0000,graph 0 to     1.0000,graph 1 as 1
set arrow from     1.3536,graph 0 to     1.3536,graph 1 as 1
set arrow from     1.6597,graph 0 to     1.6597,graph 1 as 1
set arrow from     1.9659,graph 0 to     1.9659,graph 1 as 1
set title 'plot.gnu_projected' noenhanced
plot 'Si.p' u 1:($2 -     6.563400):3 w l palette lw 1 notitle, \
    0.000000 lt 2 lw 0.5 lc rgb 'grey50' notitle
