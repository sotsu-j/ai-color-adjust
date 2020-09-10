/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/

function sayHello(text) {
    alert(text)
}

function adjustLevels(inputRangeStart, inputRangeEnd, inputRangeGamma) {
    // =======================================================
    var idLvls = charIDToTypeID("Lvls")
    var desc2 = new ActionDescriptor()
    var idpresetKind = stringIDToTypeID("presetKind")
    var idpresetKindType = stringIDToTypeID("presetKindType")
    var idpresetKindCustom = stringIDToTypeID("presetKindCustom")
    desc2.putEnumerated(idpresetKind, idpresetKindType, idpresetKindCustom)
    var idAdjs = charIDToTypeID("Adjs")
    var list1 = new ActionList()
    var desc3 = new ActionDescriptor()
    var idChnl = charIDToTypeID("Chnl")
    var ref1 = new ActionReference()
    var idChnl = charIDToTypeID("Chnl")
    var idChnl = charIDToTypeID("Chnl")
    var idCmps = charIDToTypeID("Cmps")
    ref1.putEnumerated(idChnl, idChnl, idCmps)
    desc3.putReference(idChnl, ref1)
    var idInpt = charIDToTypeID("Inpt")
    var list2 = new ActionList()
    list2.putInteger(inputRangeStart)
    list2.putInteger(inputRangeEnd)
    desc3.putList(idInpt, list2)
    var idGmm = charIDToTypeID("Gmm ")
    desc3.putDouble(idGmm, inputRangeGamma)
    var idLvlA = charIDToTypeID("LvlA")
    list1.putObject(idLvlA, desc3)
    desc2.putList(idAdjs, list1)
    executeAction(idLvls, desc2, DialogModes.NO)
}
