class Styles
{
    static Find (styleName)
    {
        var availableStyles = Styles.Get ();

        if (availableStyles != null)
        {
            for (style in availableStyles)
            {
                if (style.selectorText === styleName)
                {
                    return style;
                }
            }
        }

        return null;
    }
    

    static Get()
    {
        var availableStyles = new Array ();

        for (const styleSheet of document.styleSheets)
        {
            try
            {
                for (const style of sheetSheet.cssRules)
                {
                    availableStyles.push (style);
                }
            } 
            catch (e)
            {
                console.warn ("Cannot access this stylesheet:", e);
            }
        }

        return availableStyles;
    }
}
