import numpy as np
import matplotlib.pyplot as plt
from matplotlib.collections import LineCollection

# Use width 6 for one column and 12 for two columns.
plt.rcdefaults()
plt.rcParams['mathtext.default']= 'regular'
plt.rcParams['font.size'] = 11.
plt.rcParams['font.family'] = 'Arial'
plt.rcParams['font.weight'] = 100
plt.rcParams['axes.linewidth'] = 0.6
plt.rcParams['pdf.fonttype'] = 42  # TrueType

from matplotlib import rc
rc('font',**{'family':'sans-serif','sans-serif':['Helvetica']})
rc('text', usetex=True)


# Use width 6 for one column and 12 for two columns.
plt.rcdefaults()
plt.rcParams['mathtext.default']= 'regular'
plt.rcParams['font.size'] = 11.
plt.rcParams['font.family'] = 'Arial'
plt.rcParams['font.weight'] = 100
plt.rcParams['axes.linewidth'] = 0.6
plt.rcParams['pdf.fonttype'] = 42  # TrueType

from matplotlib import rc
rc('font',**{'family':'sans-serif','sans-serif':['Helvetica']})
rc('text', usetex=True)

def rgbline(ax, kpoints, energy, z):

    pts = np.array([kpoints, energy]).T.reshape(-1, 1, 2)
    seg = np.concatenate([pts[:-1], pts[1:]], axis=1)

    lc = LineCollection(seg, array=z, cmap='Blues', lw=1)
    ax.add_collection(lc)

def bandPlotSimpleWithFatbands(scfFile,bandsFile,dataFile,symmetryPointsNames,subplot):
    
    # Energy range
    Emin = -10; Emax = 12;
    
    # Fermi energy
    z = open(scfFile,'r')
    for i in z:
        if "Fermi energy" in i:
            EFermi = float(i.split()[4])
    z.close()
    
    # Load bands
    z = np.loadtxt(dataFile)            # We load the file 'bands.out.gnu'
    kpoints = np.unique(z[:,0])         # We gather the unique k-points
    nbands = len(z[z[:,0]==kpoints[1]]) # Number of bands

    # Fat bands?
    if (len(z[0]) < 3):
        fatbands = False
        bands = np.zeros((nbands,len(kpoints),2))
    else:
        fatbands = True
        bands = np.zeros((nbands,len(kpoints),3))
    
    # We plot the bands by looping on k-points and band index
    for i in range(0,len(kpoints)):
        for j in range(0,nbands):
            bands[j][i][0] = kpoints[i]
            bands[j][i][1] = z[z[:,0] == kpoints[i]][j][1] - EFermi
            if (fatbands):
                bands[j][i][2] = z[z[:,0] == kpoints[i]][j][2]
    
    # High symmetry lines
    z = open(bandsFile,'r')
    symmetryPoints = np.zeros(0)
    for i in z:
        if "high-symmetry" in i:
            symmetryPoints = np.append(symmetryPoints,float(i.split()[-1]))
    z.close()
    for i in symmetryPoints:
        subplot.plot([i,i],[Emin,Emax],'k-', lw = 0.6)
    
    # Plot bands
    for i in bands:
        if (fatbands):
            rgbline(subplot, i[:,0], i[:,1], i[:,2])
        else:
            subplot.plot(i[:,0],i[:,1], 'k-', lw=1)
    subplot.plot([min(kpoints),max(kpoints)],[0,0],'k:', lw = 0.6)
    subplot.set_xticks(symmetryPoints)
    subplot.set_xticklabels(symmetryPointsNames)
    subplot.set_xlim(0,max(kpoints))
    subplot.set_ylim(Emin,Emax)