<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <!-- open template -->
    <xsl:template match="/">
        
        <html>

            <head>
                <title>Product List</title>
            </head>

            <body>

                <h1>Products</h1>

                <!-- open table -->
                <table border="1">

                    <!-- open table row -->
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Stock Status</th>
                        <th>Expiration Date</th>
                        <th>Unit Price</th>
                        <th>Rating</th>
                    </tr>
                    <!-- close table row -->

                    <!-- open loop -->
                    <xsl:for-each select="products/product">

                        <!-- open table row -->
                        <tr>
                            <td><xsl:value-of select="@code"/></td>
                            <td><xsl:value-of select="name"/></td>
                            <td><xsl:value-of select="stockStatus"/></td>
                            <td><xsl:value-of select="expirationDate"/></td>
                            <td><xsl:value-of select="unitPrice"/></td>
                            <td><xsl:value-of select="rating"/></td>
                        </tr>
                        <!-- close table row -->

                    </xsl:for-each>
                    <!-- close loop -->

                </table>
                <!-- close table -->

            </body>

        </html>

    </xsl:template>
    <!-- close template -->

</xsl:stylesheet>